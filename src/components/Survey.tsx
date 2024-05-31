"use client";

import { Model } from "survey-core";
import "survey-core/defaultV2.css";
import { Survey } from "survey-react-ui";
// import {Survey} from "/../../survey-core/survey-creator_dev/packages/build/survey-react-ui"
import { json } from "../../data/survey_json.js";
// import { themeJson } from "@/utils/constants";
import { SurveyPDF } from "survey-pdf";
// import { json } from "../../data/survey_json-0.js";
// import Survey from "../../surveyjs-core/survey-creator/testCafe/property-grid/survey.js";
// import "../../surveyjs-core//survey-library_dev/src/defaultV2.scss";
// import Survey from "../../surveyjs-core/survey-creator/testCafe/property-grid/survey.js";
// import { Model } from "../../surveyjs-core/survey-library_dev/build/survey-core/survey.core.js";
// import { Survey } from "../../surveyjs-core/survey-library_dev/src/react/reactSurvey.jsx";
// import { Survey } from "../../surveyjs-core/survey-library_dev/src/entries/vue-ui-model.js";
// import { Model, Survey } from "../../surveyjs-core/survey-library_dev/src/entries/knockout-ui-model.js";

function createSurveyPdfModel(surveyModel: any) {
	const pdfWidth =
		!!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
	const pdfHeight =
		!!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
	const options = {
		fontSize: 14,
		margins: {
			left: 10,
			right: 10,
			top: 10,
			bot: 10,
		},
		applyImageFit: false,
		format: [pdfWidth, pdfHeight],
	};
	const surveyPDF = new SurveyPDF(json, options);
	// const surveyPDF = new SurveyPDF(fields, options);
	if (surveyModel) {
		surveyPDF.data = surveyModel.data;
	}

	return surveyPDF;
}
function saveSurveyToPdf(filename: string, surveyModel: any) {
	createSurveyPdfModel(surveyModel).save(filename);
}

export default function SurveyComponent() {
	const model = new Model(json);
	// const model = new Model(fields);
	// @ts-ignore
	// model.applyTheme(themeJson);
	model.addNavigationItem({
		id: "survey_save_as_file",
		title: "Save as PDF",
		action: () => {
			saveSurveyToPdf("surveyResult.pdf", model);
		},
	});
	// const model = new Model(json);

	return <Survey model={model} />;
}
