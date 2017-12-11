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
import IoK8sKubernetesPkgApiV1ContainerState from './IoK8sKubernetesPkgApiV1ContainerState';





/**
* The IoK8sKubernetesPkgApiV1ContainerStatus model module.
* @module mikespgk/IoK8sKubernetesPkgApiV1ContainerStatus
* @version v3.6.173.0.21
*/
export default class IoK8sKubernetesPkgApiV1ContainerStatus {
    /**
    * Constructs a new <code>IoK8sKubernetesPkgApiV1ContainerStatus</code>.
    * ContainerStatus contains details for the current status of this container.
    * @alias module:mikespgk/IoK8sKubernetesPkgApiV1ContainerStatus
    * @class
    * @param image {String} The image the container is running. More info: http://kubernetes.io/docs/user-guide/images
    * @param imageID {String} ImageID of the container's image.
    * @param name {String} This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
    * @param ready {Boolean} Specifies whether the container has passed its readiness probe.
    * @param restartCount {Number} The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
    */

    constructor(image, imageID, name, ready, restartCount) {
        

        
        

        this['image'] = image;this['imageID'] = imageID;this['name'] = name;this['ready'] = ready;this['restartCount'] = restartCount;

        
    }

    /**
    * Constructs a <code>IoK8sKubernetesPkgApiV1ContainerStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:mikespgk/IoK8sKubernetesPkgApiV1ContainerStatus} obj Optional instance to populate.
    * @return {module:mikespgk/IoK8sKubernetesPkgApiV1ContainerStatus} The populated <code>IoK8sKubernetesPkgApiV1ContainerStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubernetesPkgApiV1ContainerStatus();

            
            
            

            if (data.hasOwnProperty('containerID')) {
                obj['containerID'] = ApiClient.convertToType(data['containerID'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('imageID')) {
                obj['imageID'] = ApiClient.convertToType(data['imageID'], 'String');
            }
            if (data.hasOwnProperty('lastState')) {
                obj['lastState'] = IoK8sKubernetesPkgApiV1ContainerState.constructFromObject(data['lastState']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ready')) {
                obj['ready'] = ApiClient.convertToType(data['ready'], 'Boolean');
            }
            if (data.hasOwnProperty('restartCount')) {
                obj['restartCount'] = ApiClient.convertToType(data['restartCount'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = IoK8sKubernetesPkgApiV1ContainerState.constructFromObject(data['state']);
            }
        }
        return obj;
    }

    /**
    * Container's ID in the format 'docker://<container_id>'. More info: http://kubernetes.io/docs/user-guide/container-environment#container-information
    * @member {String} containerID
    */
    containerID = undefined;
    /**
    * The image the container is running. More info: http://kubernetes.io/docs/user-guide/images
    * @member {String} image
    */
    image = undefined;
    /**
    * ImageID of the container's image.
    * @member {String} imageID
    */
    imageID = undefined;
    /**
    * Details about the container's last termination condition.
    * @member {module:mikespgk/IoK8sKubernetesPkgApiV1ContainerState} lastState
    */
    lastState = undefined;
    /**
    * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
    * @member {String} name
    */
    name = undefined;
    /**
    * Specifies whether the container has passed its readiness probe.
    * @member {Boolean} ready
    */
    ready = undefined;
    /**
    * The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
    * @member {Number} restartCount
    */
    restartCount = undefined;
    /**
    * Details about the container's current condition.
    * @member {module:mikespgk/IoK8sKubernetesPkgApiV1ContainerState} state
    */
    state = undefined;








}


