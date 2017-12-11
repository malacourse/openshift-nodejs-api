# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quota** | [**IoK8sKubernetesPkgApiV1ResourceQuotaSpec**](IoK8sKubernetesPkgApiV1ResourceQuotaSpec.md) | Quota defines the desired quota | 
**selector** | [**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaSelector**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaSelector.md) | Selector is the selector used to match projects. It should only select active projects on the scale of dozens (though it can select many more less active projects).  These projects will contend on object creation through this resource. | 


