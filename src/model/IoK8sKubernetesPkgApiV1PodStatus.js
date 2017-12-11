/**
 * OpenShift API (with Kubernetes)
 * OpenShift provides builds, application lifecycle, image content management, and administrative policy on top of Kubernetes. The API allows consistent management of those objects.  All API operations are authenticated via an Authorization bearer token that is provided for service accounts as a generated secret (in JWT form) or via the native OAuth endpoint located at /oauth/authorize. Core infrastructure components may use client certificates that require no authentication.  All API operations return a 'resourceVersion' string that represents the version of the object in the underlying storage. The standard LIST operation performs a snapshot read of the underlying objects, returning a resourceVersion representing a consistent version of the listed objects. The WATCH operation allows all updates to a set of objects after the provided resourceVersion to be observed by a client. By listing and beginning a watch from the returned resourceVersion, clients may observe a consistent view of the state of one or more objects. Note that WATCH always returns the update after the provided resourceVersion. Watch may be extended a limited time in the past - using etcd 2 the watch window is 1000 events (which on a large cluster may only be a few tens of seconds) so clients must explicitly handle the \"watch to old error\" by re-listing.  Objects are divided into two rough categories - those that have a lifecycle and must reflect the state of the cluster, and those that have no state. Objects with lifecycle typically have three main sections:  * 'metadata' common to all objects * a 'spec' that represents the desired state * a 'status' that represents how much of the desired state is reflected on   the cluster at the current time  Objects that have no state have 'metadata' but may lack a 'spec' or 'status' section.  Objects are divided into those that are namespace scoped (only exist inside of a namespace) and those that are cluster scoped (exist outside of a namespace). A namespace scoped resource will be deleted when the namespace is deleted and cannot be created if the namespace has not yet been created or is in the process of deletion. Cluster scoped resources are typically only accessible to admins - resources like nodes, persistent volumes, and cluster policy.  All objects have a schema that is a combination of the 'kind' and 'apiVersion' fields. This schema is additive only for any given version - no backwards incompatible changes are allowed without incrementing the apiVersion. The server will return and accept a number of standard responses that share a common schema - for instance, the common error type is 'metav1.Status' (described below) and will be returned on any error from the API server.  The API is available in multiple serialization formats - the default is JSON (Accept: application/json and Content-Type: application/json) but clients may also use YAML (application/yaml) or the native Protobuf schema (application/vnd.kubernetes.protobuf). Note that the format of the WATCH API call is slightly different - for JSON it returns newline delimited objects while for Protobuf it returns length-delimited frames (4 bytes in network-order) that contain a 'versioned.Watch' Protobuf object.  See the OpenShift documentation at https://docs.openshift.org for more information. 
 *
 * OpenAPI spec version: v3.6.173.0.21
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import IoK8sApimachineryPkgApisMetaV1Time from './IoK8sApimachineryPkgApisMetaV1Time';
import IoK8sKubernetesPkgApiV1ContainerStatus from './IoK8sKubernetesPkgApiV1ContainerStatus';
import IoK8sKubernetesPkgApiV1PodCondition from './IoK8sKubernetesPkgApiV1PodCondition';





/**
* The IoK8sKubernetesPkgApiV1PodStatus model module.
* @module model/IoK8sKubernetesPkgApiV1PodStatus
* @version v3.6.173.0.21
*/
export default class IoK8sKubernetesPkgApiV1PodStatus {
    /**
    * Constructs a new <code>IoK8sKubernetesPkgApiV1PodStatus</code>.
    * PodStatus represents information about the status of a pod. Status may trail the actual state of a system.
    * @alias module:model/IoK8sKubernetesPkgApiV1PodStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IoK8sKubernetesPkgApiV1PodStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IoK8sKubernetesPkgApiV1PodStatus} obj Optional instance to populate.
    * @return {module:model/IoK8sKubernetesPkgApiV1PodStatus} The populated <code>IoK8sKubernetesPkgApiV1PodStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubernetesPkgApiV1PodStatus();

            
            
            

            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [IoK8sKubernetesPkgApiV1PodCondition]);
            }
            if (data.hasOwnProperty('containerStatuses')) {
                obj['containerStatuses'] = ApiClient.convertToType(data['containerStatuses'], [IoK8sKubernetesPkgApiV1ContainerStatus]);
            }
            if (data.hasOwnProperty('hostIP')) {
                obj['hostIP'] = ApiClient.convertToType(data['hostIP'], 'String');
            }
            if (data.hasOwnProperty('initContainerStatuses')) {
                obj['initContainerStatuses'] = ApiClient.convertToType(data['initContainerStatuses'], [IoK8sKubernetesPkgApiV1ContainerStatus]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('phase')) {
                obj['phase'] = ApiClient.convertToType(data['phase'], 'String');
            }
            if (data.hasOwnProperty('podIP')) {
                obj['podIP'] = ApiClient.convertToType(data['podIP'], 'String');
            }
            if (data.hasOwnProperty('qosClass')) {
                obj['qosClass'] = ApiClient.convertToType(data['qosClass'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = IoK8sApimachineryPkgApisMetaV1Time.constructFromObject(data['startTime']);
            }
        }
        return obj;
    }

    /**
    * Current service state of pod. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions
    * @member {Array.<module:model/IoK8sKubernetesPkgApiV1PodCondition>} conditions
    */
    conditions = undefined;
    /**
    * The list has one entry per container in the manifest. Each entry is currently the output of `docker inspect`. More info: http://kubernetes.io/docs/user-guide/pod-states#container-statuses
    * @member {Array.<module:model/IoK8sKubernetesPkgApiV1ContainerStatus>} containerStatuses
    */
    containerStatuses = undefined;
    /**
    * IP address of the host to which the pod is assigned. Empty if not yet scheduled.
    * @member {String} hostIP
    */
    hostIP = undefined;
    /**
    * The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: http://kubernetes.io/docs/user-guide/pod-states#container-statuses
    * @member {Array.<module:model/IoK8sKubernetesPkgApiV1ContainerStatus>} initContainerStatuses
    */
    initContainerStatuses = undefined;
    /**
    * A human readable message indicating details about why the pod is in this condition.
    * @member {String} message
    */
    message = undefined;
    /**
    * Current condition of the pod. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-phase
    * @member {String} phase
    */
    phase = undefined;
    /**
    * IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
    * @member {String} podIP
    */
    podIP = undefined;
    /**
    * The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://github.com/kubernetes/kubernetes/blob/master/docs/design/resource-qos.md
    * @member {String} qosClass
    */
    qosClass = undefined;
    /**
    * A brief CamelCase message indicating details about why the pod is in this state. e.g. 'OutOfDisk'
    * @member {String} reason
    */
    reason = undefined;
    /**
    * RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.
    * @member {module:model/IoK8sApimachineryPkgApisMetaV1Time} startTime
    */
    startTime = undefined;








}


