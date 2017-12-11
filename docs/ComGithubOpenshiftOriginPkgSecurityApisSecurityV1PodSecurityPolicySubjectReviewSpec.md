# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReviewSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | **[String]** | groups is the groups you&#39;re testing for. | [optional] 
**template** | [**IoK8sKubernetesPkgApiV1PodTemplateSpec**](IoK8sKubernetesPkgApiV1PodTemplateSpec.md) | template is the PodTemplateSpec to check. If template.spec.serviceAccountName is empty it will not be defaulted. If its non-empty, it will be checked. | 
**user** | **String** | user is the user you&#39;re testing for. If you specify \&quot;user\&quot; but not \&quot;group\&quot;, then is it interpreted as \&quot;What if user were not a member of any groups. If user and groups are empty, then the check is performed using *only* the serviceAccountName in the template. | [optional] 


