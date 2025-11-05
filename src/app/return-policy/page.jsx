export default function Page() {
	return (
		<main className="container mx-auto py-12 px-4">
			<h1 className="text-3xl font-bold mb-4">Return Policy</h1>

			<p className="mb-4">
				Since CholaBiz offers digital software products and IT services, there are no physical goods to return.
			</p>
			<p className="mb-4">
				Once the digital license or access credentials have been issued, the service is considered delivered and
				non-returnable.
			</p>
			<p className="mb-4">
				In case of any technical issues, our team will provide rectification or replacement within the warranty/support period.
			</p>

			<p className="mt-6">
				For support or questions about delivery, licensing, or technical issues, contact:
			</p>
			<p className="mt-2">
				<a href="mailto:billing@cholabiz.com" className="text-blue-600">billing@cholabiz.com</a>
				{' '}|{' '}
				<a href="tel:+919841323388" className="text-blue-600">+91 98413 23388</a>
			</p>
		</main>
	)
}

