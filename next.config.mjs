/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add next-themes configuration here
  plugins: [
    [
      "next-themes",
      {
        defaultTheme: "dark",
      },
    ],
  ],
};

export default nextConfig;
