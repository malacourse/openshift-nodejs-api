# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgImageApisImageV1TagEventCondition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generation** | **Number** | Generation is the spec tag generation that this status corresponds to | 
**lastTransitionTime** | [**IoK8sApimachineryPkgApisMetaV1Time**](IoK8sApimachineryPkgApisMetaV1Time.md) | LastTransitionTIme is the time the condition transitioned from one status to another. | [optional] 
**message** | **String** | Message is a human readable description of the details about last transition, complementing reason. | [optional] 
**reason** | **String** | Reason is a brief machine readable explanation for the condition&#39;s last transition. | [optional] 
**status** | **String** | Status of the condition, one of True, False, Unknown. | 
**type** | **String** | Type of tag event condition, currently only ImportSuccess | 


