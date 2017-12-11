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





/**
* The ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter model module.
* @module model/ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter
* @version v3.6.173.0.21
*/
export default class ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter {
    /**
    * Constructs a new <code>ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter</code>.
    * Parameter defines a name/value variable that is to be processed during the Template to Config transformation.
    * @alias module:model/ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter
    * @class
    * @param name {String} Name must be set and it can be referenced in Template Items using ${PARAMETER_NAME}. Required.
    */

    constructor(name) {
        

        
        

        this['name'] = name;

        
    }

    /**
    * Constructs a <code>ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter} obj Optional instance to populate.
    * @return {module:model/ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter} The populated <code>ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Parameter();

            
            
            

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('generate')) {
                obj['generate'] = ApiClient.convertToType(data['generate'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * Description of a parameter. Optional.
    * @member {String} description
    */
    description = undefined;
    /**
    * Optional: The name that will show in UI instead of parameter 'Name'
    * @member {String} displayName
    */
    displayName = undefined;
    /**
    * From is an input value for the generator. Optional.
    * @member {String} from
    */
    from = undefined;
    /**
    * generate specifies the generator to be used to generate random string from an input value specified by From field. The result string is stored into Value field. If empty, no generator is being used, leaving the result Value untouched. Optional.  The only supported generator is \"expression\", which accepts a \"from\" value in the form of a simple regular expression containing the range expression \"[a-zA-Z0-9]\", and the length expression \"a{length}\".  Examples:  from             | value ----------------------------- \"test[0-9]{1}x\"  | \"test7x\" \"[0-1]{8}\"       | \"01001100\" \"0x[A-F0-9]{4}\"  | \"0xB3AF\" \"[a-zA-Z0-9]{8}\" | \"hW4yQU5i\"
    * @member {String} generate
    */
    generate = undefined;
    /**
    * Name must be set and it can be referenced in Template Items using ${PARAMETER_NAME}. Required.
    * @member {String} name
    */
    name = undefined;
    /**
    * Optional: Indicates the parameter must have a value.  Defaults to false.
    * @member {Boolean} required
    */
    required = undefined;
    /**
    * Value holds the Parameter data. If specified, the generator will be ignored. The value replaces all occurrences of the Parameter ${Name} expression during the Template to Config transformation. Optional.
    * @member {String} value
    */
    value = undefined;








}


