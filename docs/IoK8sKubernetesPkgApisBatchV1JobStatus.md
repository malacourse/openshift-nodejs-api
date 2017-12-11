# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisBatchV1JobStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Number** | Active is the number of actively running pods. | [optional] 
**completionTime** | [**IoK8sApimachineryPkgApisMetaV1Time**](IoK8sApimachineryPkgApisMetaV1Time.md) | CompletionTime represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. | [optional] 
**conditions** | [**[IoK8sKubernetesPkgApisBatchV1JobCondition]**](IoK8sKubernetesPkgApisBatchV1JobCondition.md) | Conditions represent the latest available observations of an object&#39;s current state. More info: http://kubernetes.io/docs/user-guide/jobs | [optional] 
**failed** | **Number** | Failed is the number of pods which reached Phase Failed. | [optional] 
**startTime** | [**IoK8sApimachineryPkgApisMetaV1Time**](IoK8sApimachineryPkgApisMetaV1Time.md) | StartTime represents time when the job was acknowledged by the Job Manager. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. | [optional] 
**succeeded** | **Number** | Succeeded is the number of pods which reached Phase Succeeded. | [optional] 


