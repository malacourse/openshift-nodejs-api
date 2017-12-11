# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisPolicyV1beta1PodDisruptionBudget

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) |  | [optional] 
**spec** | [**IoK8sKubernetesPkgApisPolicyV1beta1PodDisruptionBudgetSpec**](IoK8sKubernetesPkgApisPolicyV1beta1PodDisruptionBudgetSpec.md) | Specification of the desired behavior of the PodDisruptionBudget. | [optional] 
**status** | [**IoK8sKubernetesPkgApisPolicyV1beta1PodDisruptionBudgetStatus**](IoK8sKubernetesPkgApisPolicyV1beta1PodDisruptionBudgetStatus.md) | Most recently observed status of the PodDisruptionBudget. | [optional] 


