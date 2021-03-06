# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PodStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**[IoK8sKubernetesPkgApiV1PodCondition]**](IoK8sKubernetesPkgApiV1PodCondition.md) | Current service state of pod. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions | [optional] 
**containerStatuses** | [**[IoK8sKubernetesPkgApiV1ContainerStatus]**](IoK8sKubernetesPkgApiV1ContainerStatus.md) | The list has one entry per container in the manifest. Each entry is currently the output of &#x60;docker inspect&#x60;. More info: http://kubernetes.io/docs/user-guide/pod-states#container-statuses | [optional] 
**hostIP** | **String** | IP address of the host to which the pod is assigned. Empty if not yet scheduled. | [optional] 
**initContainerStatuses** | [**[IoK8sKubernetesPkgApiV1ContainerStatus]**](IoK8sKubernetesPkgApiV1ContainerStatus.md) | The list has one entry per init container in the manifest. The most recent successful init container will have ready &#x3D; true, the most recently started container will have startTime set. More info: http://kubernetes.io/docs/user-guide/pod-states#container-statuses | [optional] 
**message** | **String** | A human readable message indicating details about why the pod is in this condition. | [optional] 
**phase** | **String** | Current condition of the pod. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-phase | [optional] 
**podIP** | **String** | IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated. | [optional] 
**qosClass** | **String** | The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://github.com/kubernetes/kubernetes/blob/master/docs/design/resource-qos.md | [optional] 
**reason** | **String** | A brief CamelCase message indicating details about why the pod is in this state. e.g. &#39;OutOfDisk&#39; | [optional] 
**startTime** | [**IoK8sApimachineryPkgApisMetaV1Time**](IoK8sApimachineryPkgApisMetaV1Time.md) | RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod. | [optional] 


