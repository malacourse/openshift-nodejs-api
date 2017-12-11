# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) |  | [optional] 
**spec** | [**IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReviewSpec**](IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReviewSpec.md) | Spec holds information about the request being evaluated | 
**status** | [**IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReviewStatus**](IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReviewStatus.md) | Status is filled in by the server and indicates whether the request is allowed or not | [optional] 


