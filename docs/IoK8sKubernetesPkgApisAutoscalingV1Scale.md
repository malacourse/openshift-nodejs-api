# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAutoscalingV1Scale

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object metadata; More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata. | [optional] 
**spec** | [**IoK8sKubernetesPkgApisAutoscalingV1ScaleSpec**](IoK8sKubernetesPkgApisAutoscalingV1ScaleSpec.md) | defines the behavior of the scale. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status. | [optional] 
**status** | [**IoK8sKubernetesPkgApisAutoscalingV1ScaleStatus**](IoK8sKubernetesPkgApisAutoscalingV1ScaleStatus.md) | current status of the scale. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status. Read-only. | [optional] 


