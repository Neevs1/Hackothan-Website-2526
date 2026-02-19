export const uploadToCloudinary = async (file: File) => {
  // 🔒 300KB limit check
  if (file.size > 300 * 1024) {
    throw new Error("Image must be under 300KB");
  }

  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Cloudinary upload failed");
  }

  return data.secure_url;
};
