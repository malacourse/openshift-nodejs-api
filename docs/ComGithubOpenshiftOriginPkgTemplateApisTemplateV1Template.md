# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**labels** | **{String: String}** | labels is a optional set of labels that are applied to every object during the Template to Config transformation. | [optional] 
**message** | **String** | message is an optional instructional message that will be displayed when this template is instantiated. This field should inform the user how to utilize the newly created resources. Parameter substitution will be performed on the message before being displayed so that generated credentials and other parameters can be included in the output. | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**objects** | [**[IoK8sApimachineryPkgRuntimeRawExtension]**](IoK8sApimachineryPkgRuntimeRawExtension.md) | objects is an array of resources to include in this template. If a namespace value is hardcoded in the object, it will be removed during template instantiation, however if the namespace value is, or contains, a ${PARAMETER_REFERENCE}, the resolved value after parameter substitution will be respected and the object will be created in that namespace. | 
**parameters** | [**[ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter]**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter.md) | parameters is an optional array of Parameters used during the Template to Config transformation. | [optional] 


