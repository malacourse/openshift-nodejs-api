# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigRollbackSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | From points to a ReplicationController which is a deployment. | 
**includeReplicationMeta** | **Boolean** | IncludeReplicationMeta specifies whether to include the replica count and selector. | 
**includeStrategy** | **Boolean** | IncludeStrategy specifies whether to include the deployment Strategy. | 
**includeTemplate** | **Boolean** | IncludeTemplate specifies whether to include the PodTemplateSpec. | 
**includeTriggers** | **Boolean** | IncludeTriggers specifies whether to include config Triggers. | 
**revision** | **Number** | Revision to rollback to. If set to 0, rollback to the last revision. | [optional] 


