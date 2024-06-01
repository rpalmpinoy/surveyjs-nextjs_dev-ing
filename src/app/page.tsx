export default function Homepage() {
	return (
		<div className="flex min-h-screen flex-col items-center /*p-24*/">
			<h1 className="mb-12 text-3xl font-bold tracking-tight md:text-xl xl:text-2xl">
				SurveyJS + NextJS Quickstart Template
			</h1>
			<div className="text-lg text-neutral-500 dark:text-neutral-300">
				<p>
					SurveyJS is a set of JavaScript components that allow you
					and your users to build surveys / forms, store them in your
					database, and visualize survey results for data analysis.
					This quick start template uses the following SurveyJS
					components:
				</p>
				<ul>
					<li>
						<a
							className="underline"
							href="https://surveyjs.io/Documentation/Library?id=LibraryOverview"
							target="_blank"
							rel="noopener"
						>
							SurveyJS Form Library
						</a>
					</li>
					<li>
						<a
							className="underline"
							href="https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview"
							target="_blank"
							rel="noopener"
						>
							Survey Creator / Form Builder
						</a>
					</li>
					<li>
						<a
							className="underline"
							href="https://surveyjs.io/Documentation/Analytics?id=AnalyticsOverview"
							target="_blank"
							rel="noopener"
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							className="underline"
							href="https://surveyjs.io/Documentation/Pdf-Export?id=PdfExportOverview"
							target="_blank"
							rel="noopener"
						>
							PDF Generator
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
