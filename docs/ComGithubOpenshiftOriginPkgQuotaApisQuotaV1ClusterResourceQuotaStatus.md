# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespaces** | [**[ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ResourceQuotaStatusByNamespace]**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ResourceQuotaStatusByNamespace.md) | Namespaces slices the usage by project.  This division allows for quick resolution of deletion reconciliation inside of a single project without requiring a recalculation across all projects.  This can be used to pull the deltas for a given project. | 
**total** | [**IoK8sKubernetesPkgApiV1ResourceQuotaStatus**](IoK8sKubernetesPkgApiV1ResourceQuotaStatus.md) | Total defines the actual enforced quota and its current usage across all projects | 


