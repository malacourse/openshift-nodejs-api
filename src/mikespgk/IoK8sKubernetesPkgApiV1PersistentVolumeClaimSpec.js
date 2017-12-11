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
import IoK8sApimachineryPkgApisMetaV1LabelSelector from './IoK8sApimachineryPkgApisMetaV1LabelSelector';
import IoK8sKubernetesPkgApiV1ResourceRequirements from './IoK8sKubernetesPkgApiV1ResourceRequirements';





/**
* The IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec model module.
* @module mikespgk/IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec
* @version v3.6.173.0.21
*/
export default class IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec {
    /**
    * Constructs a new <code>IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec</code>.
    * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
    * @alias module:mikespgk/IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:mikespgk/IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec} obj Optional instance to populate.
    * @return {module:mikespgk/IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec} The populated <code>IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubernetesPkgApiV1PersistentVolumeClaimSpec();

            
            
            

            if (data.hasOwnProperty('accessModes')) {
                obj['accessModes'] = ApiClient.convertToType(data['accessModes'], ['String']);
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = IoK8sKubernetesPkgApiV1ResourceRequirements.constructFromObject(data['resources']);
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = IoK8sApimachineryPkgApisMetaV1LabelSelector.constructFromObject(data['selector']);
            }
            if (data.hasOwnProperty('storageClassName')) {
                obj['storageClassName'] = ApiClient.convertToType(data['storageClassName'], 'String');
            }
            if (data.hasOwnProperty('volumeName')) {
                obj['volumeName'] = ApiClient.convertToType(data['volumeName'], 'String');
            }
        }
        return obj;
    }

    /**
    * AccessModes contains the desired access modes the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes-1
    * @member {Array.<String>} accessModes
    */
    accessModes = undefined;
    /**
    * Resources represents the minimum resources the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#resources
    * @member {module:mikespgk/IoK8sKubernetesPkgApiV1ResourceRequirements} resources
    */
    resources = undefined;
    /**
    * A label query over volumes to consider for binding.
    * @member {module:mikespgk/IoK8sApimachineryPkgApisMetaV1LabelSelector} selector
    */
    selector = undefined;
    /**
    * Name of the StorageClass required by the claim. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#class-1
    * @member {String} storageClassName
    */
    storageClassName = undefined;
    /**
    * VolumeName is the binding reference to the PersistentVolume backing this claim.
    * @member {String} volumeName
    */
    volumeName = undefined;








}

