import SurveyComponent from "@/components/Survey";

// import dynamic from 'next/dynamic';
// const SurveyComponent = dynamic(() => import("@/components/Survey"), { ssr: false });

export default function Survey() {
	return (
		<div className="flex min-h-screen flex-col items-center /*p-8*/">
			<SurveyComponent />
		</div>
	);
}
