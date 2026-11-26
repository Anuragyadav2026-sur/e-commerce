export default function AnnouncementBar() {
  return (
    <div className="bg-gray-900 text-white py-2 text-center">
      <p className="text-sm">
        🎉 Special Offer: Get 20% OFF on your first order!
        <a href="/products" className="ml-2 underline">
          Shop Now
        </a>
      </p>
    </div>
  );
}