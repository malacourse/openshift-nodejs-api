# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReviewSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceAccountNames** | **[String]** | serviceAccountNames is an optional set of ServiceAccounts to run the check with. If serviceAccountNames is empty, the template.spec.serviceAccountName is used, unless it&#39;s empty, in which case \&quot;default\&quot; is used instead. If serviceAccountNames is specified, template.spec.serviceAccountName is ignored. | [optional] 
**template** | [**IoK8sKubernetesPkgApiV1PodTemplateSpec**](IoK8sKubernetesPkgApiV1PodTemplateSpec.md) | template is the PodTemplateSpec to check. The template.spec.serviceAccountName field is used if serviceAccountNames is empty, unless the template.spec.serviceAccountName is empty, in which case \&quot;default\&quot; is used. If serviceAccountNames is specified, template.spec.serviceAccountName is ignored. | 


