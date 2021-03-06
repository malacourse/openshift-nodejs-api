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
    instance = new OpenShiftApiWithKubernetes.BatchV1Api();
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

  describe('BatchV1Api', function() {
    describe('createBatchV1JobForAllNamespaces', function() {
      it('should call createBatchV1JobForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createBatchV1JobForAllNamespaces
        //instance.createBatchV1JobForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBatchV1NamespacedJob', function() {
      it('should call createBatchV1NamespacedJob successfully', function(done) {
        //uncomment below and update the code to test createBatchV1NamespacedJob
        //instance.createBatchV1NamespacedJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBatchV1CollectionNamespacedJob', function() {
      it('should call deleteBatchV1CollectionNamespacedJob successfully', function(done) {
        //uncomment below and update the code to test deleteBatchV1CollectionNamespacedJob
        //instance.deleteBatchV1CollectionNamespacedJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBatchV1NamespacedJob', function() {
      it('should call deleteBatchV1NamespacedJob successfully', function(done) {
        //uncomment below and update the code to test deleteBatchV1NamespacedJob
        //instance.deleteBatchV1NamespacedJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBatchV1APIResources', function() {
      it('should call getBatchV1APIResources successfully', function(done) {
        //uncomment below and update the code to test getBatchV1APIResources
        //instance.getBatchV1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBatchV1JobForAllNamespaces', function() {
      it('should call listBatchV1JobForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listBatchV1JobForAllNamespaces
        //instance.listBatchV1JobForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBatchV1NamespacedJob', function() {
      it('should call listBatchV1NamespacedJob successfully', function(done) {
        //uncomment below and update the code to test listBatchV1NamespacedJob
        //instance.listBatchV1NamespacedJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchBatchV1NamespacedJob', function() {
      it('should call patchBatchV1NamespacedJob successfully', function(done) {
        //uncomment below and update the code to test patchBatchV1NamespacedJob
        //instance.patchBatchV1NamespacedJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchBatchV1NamespacedJobStatus', function() {
      it('should call patchBatchV1NamespacedJobStatus successfully', function(done) {
        //uncomment below and update the code to test patchBatchV1NamespacedJobStatus
        //instance.patchBatchV1NamespacedJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readBatchV1NamespacedJob', function() {
      it('should call readBatchV1NamespacedJob successfully', function(done) {
        //uncomment below and update the code to test readBatchV1NamespacedJob
        //instance.readBatchV1NamespacedJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readBatchV1NamespacedJobStatus', function() {
      it('should call readBatchV1NamespacedJobStatus successfully', function(done) {
        //uncomment below and update the code to test readBatchV1NamespacedJobStatus
        //instance.readBatchV1NamespacedJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceBatchV1NamespacedJob', function() {
      it('should call replaceBatchV1NamespacedJob successfully', function(done) {
        //uncomment below and update the code to test replaceBatchV1NamespacedJob
        //instance.replaceBatchV1NamespacedJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceBatchV1NamespacedJobStatus', function() {
      it('should call replaceBatchV1NamespacedJobStatus successfully', function(done) {
        //uncomment below and update the code to test replaceBatchV1NamespacedJobStatus
        //instance.replaceBatchV1NamespacedJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchBatchV1JobListForAllNamespaces', function() {
      it('should call watchBatchV1JobListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchBatchV1JobListForAllNamespaces
        //instance.watchBatchV1JobListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchBatchV1NamespacedJob', function() {
      it('should call watchBatchV1NamespacedJob successfully', function(done) {
        //uncomment below and update the code to test watchBatchV1NamespacedJob
        //instance.watchBatchV1NamespacedJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchBatchV1NamespacedJobList', function() {
      it('should call watchBatchV1NamespacedJobList successfully', function(done) {
        //uncomment below and update the code to test watchBatchV1NamespacedJobList
        //instance.watchBatchV1NamespacedJobList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
