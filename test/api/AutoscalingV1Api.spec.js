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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenShiftApiWithKubernetes);
  }
}(this, function(expect, OpenShiftApiWithKubernetes) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenShiftApiWithKubernetes.AutoscalingV1Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AutoscalingV1Api', function() {
    describe('createAutoscalingV1HorizontalPodAutoscalerForAllNamespaces', function() {
      it('should call createAutoscalingV1HorizontalPodAutoscalerForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createAutoscalingV1HorizontalPodAutoscalerForAllNamespaces
        //instance.createAutoscalingV1HorizontalPodAutoscalerForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call createAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test createAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.createAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler', function() {
      it('should call deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler
        //instance.deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call deleteAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test deleteAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.deleteAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAutoscalingV1APIResources', function() {
      it('should call getAutoscalingV1APIResources successfully', function(done) {
        //uncomment below and update the code to test getAutoscalingV1APIResources
        //instance.getAutoscalingV1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces', function() {
      it('should call listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces
        //instance.listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call listAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test listAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.listAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call patchAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test patchAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.patchAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus', function() {
      it('should call patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus successfully', function(done) {
        //uncomment below and update the code to test patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus
        //instance.patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call readAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test readAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.readAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus', function() {
      it('should call readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus successfully', function(done) {
        //uncomment below and update the code to test readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus
        //instance.readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call replaceAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test replaceAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.replaceAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus', function() {
      it('should call replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus successfully', function(done) {
        //uncomment below and update the code to test replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus
        //instance.replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces', function() {
      it('should call watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces
        //instance.watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAutoscalingV1NamespacedHorizontalPodAutoscaler', function() {
      it('should call watchAutoscalingV1NamespacedHorizontalPodAutoscaler successfully', function(done) {
        //uncomment below and update the code to test watchAutoscalingV1NamespacedHorizontalPodAutoscaler
        //instance.watchAutoscalingV1NamespacedHorizontalPodAutoscaler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAutoscalingV1NamespacedHorizontalPodAutoscalerList', function() {
      it('should call watchAutoscalingV1NamespacedHorizontalPodAutoscalerList successfully', function(done) {
        //uncomment below and update the code to test watchAutoscalingV1NamespacedHorizontalPodAutoscalerList
        //instance.watchAutoscalingV1NamespacedHorizontalPodAutoscalerList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
