# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1ResourceQuotaSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hard** | [**{String: IoK8sApimachineryPkgApiResourceQuantity}**](IoK8sApimachineryPkgApiResourceQuantity.md) | Hard is the set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota | [optional] 
**scopes** | **[String]** | A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects. | [optional] 


