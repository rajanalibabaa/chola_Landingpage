export default function Page() {
	return (
		<main className="container mx-auto py-12 px-4">
			<h1 className="text-3xl font-bold mb-4">Refund & Cancellation Policy</h1>

			<h2 className="text-2xl font-semibold mt-6 mb-2">Refund Policy</h2>
			<p className="mb-4">
				As our products are digital and customized software services, refunds are generally not
				provided once the project or license access has been initiated or delivered.
			</p>
			<p className="mb-2">However, refunds may be considered under the following circumstances:</p>
			<ul className="list-disc list-inside mb-4">
				<li>Duplicate payment made by the customer</li>
				<li>Payment processed but no service initiated within 15 working days</li>
			</ul>
			<p className="mb-6">Refunds, if approved, will be processed within 7–10 working days to the original payment method.</p>

			<h2 className="text-2xl font-semibold mt-6 mb-2">Cancellation Policy</h2>
			<p className="mb-4">Customers may cancel their service order within 24 hours of purchase, provided no work has started or license activated.</p>
			<p className="mb-4">After that, cancellations are not accepted.</p>

			<p className="mb-6">For any refund or cancellation request, contact:</p>
			<p>
				<a href="mailto:billing@cholabiz.com" className="text-blue-600">billing@cholabiz.com</a>
				{' '}|{' '}
				<a href="tel:+919841323388" className="text-blue-600">+91 98413 23388</a>
			</p>
		</main>
	)
}

