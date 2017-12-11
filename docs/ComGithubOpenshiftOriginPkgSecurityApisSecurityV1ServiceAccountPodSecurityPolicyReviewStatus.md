# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1ServiceAccountPodSecurityPolicyReviewStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedBy** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | allowedBy is a reference to the rule that allows the PodTemplateSpec. A rule can be a SecurityContextConstraint or a PodSecurityPolicy A &#x60;nil&#x60;, indicates that it was denied. | [optional] 
**name** | **String** | name contains the allowed and the denied ServiceAccount name | 
**reason** | **String** | A machine-readable description of why this operation is in the \&quot;Failure\&quot; status. If this value is empty there is no information available. | [optional] 
**template** | [**IoK8sKubernetesPkgApiV1PodTemplateSpec**](IoK8sKubernetesPkgApiV1PodTemplateSpec.md) | template is the PodTemplateSpec after the defaulting is applied. | [optional] 


