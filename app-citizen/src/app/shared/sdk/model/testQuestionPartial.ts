/**
 * coronavirus-server - coronavirus-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (Schema options: { partial: true })
 */
export interface TestQuestionPartial { 
  [key: string]: object | any;


    id?: string;
    questionId?: string;
    title?: string;
    subtitle?: string;
    multicheck?: boolean;
    question?: string;
    target?: string;
    children?: Array<object>;
}

