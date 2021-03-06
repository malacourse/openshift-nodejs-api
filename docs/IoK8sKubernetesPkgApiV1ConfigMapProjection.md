# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1ConfigMapProjection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[IoK8sKubernetesPkgApiV1KeyToPath]**](IoK8sKubernetesPkgApiV1KeyToPath.md) | If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the &#39;..&#39; path or start with &#39;..&#39;. | [optional] 
**name** | **String** | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names | [optional] 
**optional** | **Boolean** | Specify whether the ConfigMap or it&#39;s keys must be defined | [optional] 


