# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAppsV1beta1StatefulSet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) |  | [optional] 
**spec** | [**IoK8sKubernetesPkgApisAppsV1beta1StatefulSetSpec**](IoK8sKubernetesPkgApisAppsV1beta1StatefulSetSpec.md) | Spec defines the desired identities of pods in this set. | [optional] 
**status** | [**IoK8sKubernetesPkgApisAppsV1beta1StatefulSetStatus**](IoK8sKubernetesPkgApisAppsV1beta1StatefulSetStatus.md) | Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time. | [optional] 


