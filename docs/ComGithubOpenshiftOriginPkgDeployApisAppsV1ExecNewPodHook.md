# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **[String]** | Command is the action command and its arguments. | 
**containerName** | **String** | ContainerName is the name of a container in the deployment pod template whose Docker image will be used for the hook pod&#39;s container. | 
**env** | [**[IoK8sKubernetesPkgApiV1EnvVar]**](IoK8sKubernetesPkgApiV1EnvVar.md) | Env is a set of environment variables to supply to the hook pod&#39;s container. | [optional] 
**volumes** | **[String]** | Volumes is a list of named volumes from the pod template which should be copied to the hook pod. Volumes names not found in pod spec are ignored. An empty list means no volumes will be copied. | [optional] 


