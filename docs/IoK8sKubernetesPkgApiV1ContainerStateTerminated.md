# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1ContainerStateTerminated

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerID** | **String** | Container&#39;s ID in the format &#39;docker://&lt;container_id&gt;&#39; | [optional] 
**exitCode** | **Number** | Exit status from the last termination of the container | 
**finishedAt** | [**IoK8sApimachineryPkgApisMetaV1Time**](IoK8sApimachineryPkgApisMetaV1Time.md) | Time at which the container last terminated | [optional] 
**message** | **String** | Message regarding the last termination of the container | [optional] 
**reason** | **String** | (brief) reason from the last termination of the container | [optional] 
**signal** | **Number** | Signal from the last termination of the container | [optional] 
**startedAt** | [**IoK8sApimachineryPkgApisMetaV1Time**](IoK8sApimachineryPkgApisMetaV1Time.md) | Time at which previous execution of the container started | [optional] 


