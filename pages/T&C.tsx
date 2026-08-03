import React from 'react';
import Link from 'next/link';

export default function TermsAndConditions() {
  const brandName = "Loong Star";

  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Main Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Terms & Conditions
        </h1>

        {/* Introduction */}
        <p className="text-sm md:text-base leading-relaxed text-gray-700">
          Welcome to <span className="text-red-600 font-semibold">{brandName}</span> website online store. The terms and conditions stated below apply to all visitors and users of <span className="text-red-600 font-semibold">{brandName}</span>. You&apos;re bound by these terms and conditions as long as you&apos;re on <span className="text-red-600 font-semibold">{brandName}</span>.
        </p>

        {/* General */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">General</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            The content of terms and conditions may be change, move or delete at any time. Please note that <span className="text-red-600 font-semibold">{brandName}</span> has the right to change the contents of the terms and conditions without any notice. Any violation of rules and regulations of these terms and conditions, <span className="text-red-600 font-semibold">{brandName}</span> will take immediate action against the offender(s).
          </p>
        </section>

        {/* Site Contents & Copyrights */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Site Contents & Copyrights</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Unless otherwise noted, all materials, including images, illustrations, designs, icons, photographs, video clips, and written and other materials that appear as part of this site, in other words, &ldquo;Contents of the Site&rdquo; are copyrights, trademarks, trade dress and/or other intellectual properties owned, controlled or licensed by <span className="text-red-600 font-semibold">{brandName}</span>.
          </p>
        </section>

        {/* Comments and Feedbacks */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Comments and Feedbacks</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            All comments and feedback to <span className="text-red-600 font-semibold">{brandName}</span> will remain as <span className="text-red-600 font-semibold">{brandName}&apos;s</span> property.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            User shall agree that there will be no comment(s) submitted to the <span className="text-red-600 font-semibold">{brandName}</span> will violate any rights of any third party, including copyrights, trademarks, the privacy of other personal or proprietary rights (s). Furthermore, the user shall agree there will not be content of unlawful, abusive, or obscene material(s) submitted to the site. The user will be the only one responsible for any comment content made.
          </p>
        </section>

        {/* Product Information */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Product Information</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Kindly note that appliance dimensions may vary by 1–2 cm, and actual product colours may differ slightly from what is displayed on screen due to lighting and display settings.
          </p>
        </section>

        {/* Newsletter */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Newsletter</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            User shall agree that <span className="text-red-600 font-semibold">{brandName}</span> may send newsletters regarding the latest news/products/promotions etc. through email to the user.
          </p>
        </section>

        {/* Indemnification */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Indemnification</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            The user shall agree to defend, indemnify and hold <span className="text-red-600 font-semibold">{brandName}</span> harmless from and against any and all claims, damages, costs, and expenses, including attorneys&apos; fees, arising from or related to your use of the Site.
          </p>
        </section>

        {/* Link to other sites */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Link to other sites</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Any access link to third-party sites is at your own risk. <span className="text-red-600 font-semibold">{brandName}</span> will not be related or involved to any such website if the user&apos;s content/product(s) got damaged or lost have any connection with the third-party site.
          </p>
        </section>

        {/* Inaccuracy Information */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Inaccuracy Information</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            From time to time, there may be information on <span className="text-red-600 font-semibold">{brandName}</span> that contains typographical errors, inaccuracies, and omissions, that may relate to product description, pricing, availability, and article contents. We reserve the right to correct any errors or inaccuracies and change or edit information without prior notice to the customers. If you are not satisfied with your purchased product(s), please return it to us with the invoice. Please check out the <Link href="/return-policy" className="font-bold text-gray-900 underline hover:text-red-600 transition-colors">&ldquo;Return and Refund Policy&rdquo;</Link>.
          </p>
        </section>

        {/* Termination */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Termination</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            This agreement is effective unless and until either by the customer or <span className="text-red-600 font-semibold">{brandName}</span>. The customer may terminate this agreement at any time. However, <span className="text-red-600 font-semibold">{brandName}</span> may also terminate the agreement with the customer without any prior notice and will be denying the access of the customer who is unable to comply with the terms and conditions above.
          </p>
        </section>

      </div>
    </div>
  );
}