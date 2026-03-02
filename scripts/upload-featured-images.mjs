/**
 * upload-featured-images.mjs
 *
 * Uploads local image files to Sanity as image assets and patches
 * the specified post documents with the resulting mainImage field.
 *
 * Usage:
 *   node scripts/upload-featured-images.mjs
 *
 * Requires SANITY_API_TOKEN in environment.
 */

import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

const client = createClient({
  projectId: "9m8souzb",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

/**
 * Upload a local image file to Sanity and return the image asset document.
 * @param {string} filePath - Absolute or relative path to the image file.
 * @param {string} filename - Filename to use in Sanity (for display).
 */
async function uploadImage(filePath, filename) {
  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mimeType = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png";

  console.log(`Uploading ${filename}...`);
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType: mimeType,
  });
  console.log(`  ✓ Uploaded: ${asset._id}`);
  return asset;
}

/**
 * Patch a Sanity post document with a mainImage reference.
 * @param {string} slug - The post slug (used to find the document).
 * @param {object} asset - The Sanity image asset document.
 * @param {string} altText - Alt text for the image.
 */
async function patchPostMainImage(slug, asset, altText) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ _id }`,
    { slug }
  );

  if (!post) {
    console.error(`  ✗ Post not found: ${slug}`);
    return;
  }

  await client
    .patch(post._id)
    .set({
      mainImage: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
        alt: altText,
        hotspot: {
          _type: "sanity.imageHotspot",
          x: 0.5,
          y: 0.4,
          height: 0.6,
          width: 0.8,
        },
      },
    })
    .commit();

  console.log(`  ✓ Patched post: ${slug}`);
}

// ─── Image definitions ────────────────────────────────────────────────────────
// Each entry maps a local image file to a Sanity post slug.
// Update this array when generating featured images for new posts.

const images = [
  {
    filePath:
      "/home/ubuntu/webdev-static-assets/featured-google-maps-not-showing-up-v2.jpg",
    filename: "featured-google-maps-not-showing-up-v2.jpg",
    slug: "las-vegas-google-maps-not-showing-up",
    alt: "Why Your Las Vegas Business Isn't Showing Up on Google Maps — HuskyTail Digital",
  },
  {
    filePath:
      "/home/ubuntu/webdev-static-assets/featured-rank-1-google-maps-las-vegas-v2.jpg",
    filename: "featured-rank-1-google-maps-las-vegas-v2.jpg",
    slug: "rank-number-one-google-maps-las-vegas-2026",
    alt: "How to Rank #1 on Google Maps in Las Vegas: The Complete 2026 Guide — HuskyTail Digital",
  },
];

// ─── Run ──────────────────────────────────────────────────────────────────────

async function run() {
  console.log("HuskyTail Digital — Featured Image Uploader\n");

  for (const img of images) {
    try {
      const asset = await uploadImage(img.filePath, img.filename);
      await patchPostMainImage(img.slug, asset, img.alt);
    } catch (err) {
      console.error(`  ✗ Error processing ${img.slug}:`, err.message);
    }
  }

  console.log("\nDone.");
}

run();
