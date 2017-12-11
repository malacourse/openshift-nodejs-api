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
import IoK8sKubernetesPkgApiV1PodTemplateSpec from './IoK8sKubernetesPkgApiV1PodTemplateSpec';
import IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetUpdateStrategy from './IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetUpdateStrategy';





/**
* The IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec model module.
* @module mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec
* @version v3.6.173.0.21
*/
export default class IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec {
    /**
    * Constructs a new <code>IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec</code>.
    * DaemonSetSpec is the specification of a daemon set.
    * @alias module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec
    * @class
    * @param template {module:mikespgk/IoK8sKubernetesPkgApiV1PodTemplateSpec} An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: http://kubernetes.io/docs/user-guide/replication-controller#pod-template
    */

    constructor(template) {
        

        
        

        this['template'] = template;

        
    }

    /**
    * Constructs a <code>IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec} obj Optional instance to populate.
    * @return {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec} The populated <code>IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetSpec();

            
            
            

            if (data.hasOwnProperty('minReadySeconds')) {
                obj['minReadySeconds'] = ApiClient.convertToType(data['minReadySeconds'], 'Number');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = IoK8sApimachineryPkgApisMetaV1LabelSelector.constructFromObject(data['selector']);
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = IoK8sKubernetesPkgApiV1PodTemplateSpec.constructFromObject(data['template']);
            }
            if (data.hasOwnProperty('templateGeneration')) {
                obj['templateGeneration'] = ApiClient.convertToType(data['templateGeneration'], 'Number');
            }
            if (data.hasOwnProperty('updateStrategy')) {
                obj['updateStrategy'] = IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetUpdateStrategy.constructFromObject(data['updateStrategy']);
            }
        }
        return obj;
    }

    /**
    * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
    * @member {Number} minReadySeconds
    */
    minReadySeconds = undefined;
    /**
    * A label query over pods that are managed by the daemon set. Must match in order to be controlled. If empty, defaulted to labels on Pod template. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
    * @member {module:mikespgk/IoK8sApimachineryPkgApisMetaV1LabelSelector} selector
    */
    selector = undefined;
    /**
    * An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: http://kubernetes.io/docs/user-guide/replication-controller#pod-template
    * @member {module:mikespgk/IoK8sKubernetesPkgApiV1PodTemplateSpec} template
    */
    template = undefined;
    /**
    * A sequence number representing a specific generation of the template. Populated by the system. It can be set only during the creation.
    * @member {Number} templateGeneration
    */
    templateGeneration = undefined;
    /**
    * An update strategy to replace existing DaemonSet pods with new pods.
    * @member {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1DaemonSetUpdateStrategy} updateStrategy
    */
    updateStrategy = undefined;








}


