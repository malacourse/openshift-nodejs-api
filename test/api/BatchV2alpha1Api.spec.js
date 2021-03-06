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
    instance = new OpenShiftApiWithKubernetes.BatchV2alpha1Api();
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

  describe('BatchV2alpha1Api', function() {
    describe('createBatchV2alpha1CronJobForAllNamespaces', function() {
      it('should call createBatchV2alpha1CronJobForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createBatchV2alpha1CronJobForAllNamespaces
        //instance.createBatchV2alpha1CronJobForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBatchV2alpha1NamespacedCronJob', function() {
      it('should call createBatchV2alpha1NamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test createBatchV2alpha1NamespacedCronJob
        //instance.createBatchV2alpha1NamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBatchV2alpha1NamespacedScheduledJob', function() {
      it('should call createBatchV2alpha1NamespacedScheduledJob successfully', function(done) {
        //uncomment below and update the code to test createBatchV2alpha1NamespacedScheduledJob
        //instance.createBatchV2alpha1NamespacedScheduledJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBatchV2alpha1ScheduledJobForAllNamespaces', function() {
      it('should call createBatchV2alpha1ScheduledJobForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createBatchV2alpha1ScheduledJobForAllNamespaces
        //instance.createBatchV2alpha1ScheduledJobForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBatchV2alpha1CollectionNamespacedCronJob', function() {
      it('should call deleteBatchV2alpha1CollectionNamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test deleteBatchV2alpha1CollectionNamespacedCronJob
        //instance.deleteBatchV2alpha1CollectionNamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBatchV2alpha1CollectionNamespacedScheduledJob', function() {
      it('should call deleteBatchV2alpha1CollectionNamespacedScheduledJob successfully', function(done) {
        //uncomment below and update the code to test deleteBatchV2alpha1CollectionNamespacedScheduledJob
        //instance.deleteBatchV2alpha1CollectionNamespacedScheduledJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBatchV2alpha1NamespacedCronJob', function() {
      it('should call deleteBatchV2alpha1NamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test deleteBatchV2alpha1NamespacedCronJob
        //instance.deleteBatchV2alpha1NamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBatchV2alpha1NamespacedScheduledJob', function() {
      it('should call deleteBatchV2alpha1NamespacedScheduledJob successfully', function(done) {
        //uncomment below and update the code to test deleteBatchV2alpha1NamespacedScheduledJob
        //instance.deleteBatchV2alpha1NamespacedScheduledJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBatchV2alpha1APIResources', function() {
      it('should call getBatchV2alpha1APIResources successfully', function(done) {
        //uncomment below and update the code to test getBatchV2alpha1APIResources
        //instance.getBatchV2alpha1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBatchV2alpha1CronJobForAllNamespaces', function() {
      it('should call listBatchV2alpha1CronJobForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listBatchV2alpha1CronJobForAllNamespaces
        //instance.listBatchV2alpha1CronJobForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBatchV2alpha1NamespacedCronJob', function() {
      it('should call listBatchV2alpha1NamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test listBatchV2alpha1NamespacedCronJob
        //instance.listBatchV2alpha1NamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBatchV2alpha1NamespacedScheduledJob', function() {
      it('should call listBatchV2alpha1NamespacedScheduledJob successfully', function(done) {
        //uncomment below and update the code to test listBatchV2alpha1NamespacedScheduledJob
        //instance.listBatchV2alpha1NamespacedScheduledJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBatchV2alpha1ScheduledJobForAllNamespaces', function() {
      it('should call listBatchV2alpha1ScheduledJobForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listBatchV2alpha1ScheduledJobForAllNamespaces
        //instance.listBatchV2alpha1ScheduledJobForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchBatchV2alpha1NamespacedCronJob', function() {
      it('should call patchBatchV2alpha1NamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test patchBatchV2alpha1NamespacedCronJob
        //instance.patchBatchV2alpha1NamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchBatchV2alpha1NamespacedCronJobStatus', function() {
      it('should call patchBatchV2alpha1NamespacedCronJobStatus successfully', function(done) {
        //uncomment below and update the code to test patchBatchV2alpha1NamespacedCronJobStatus
        //instance.patchBatchV2alpha1NamespacedCronJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchBatchV2alpha1NamespacedScheduledJob', function() {
      it('should call patchBatchV2alpha1NamespacedScheduledJob successfully', function(done) {
        //uncomment below and update the code to test patchBatchV2alpha1NamespacedScheduledJob
        //instance.patchBatchV2alpha1NamespacedScheduledJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchBatchV2alpha1NamespacedScheduledJobStatus', function() {
      it('should call patchBatchV2alpha1NamespacedScheduledJobStatus successfully', function(done) {
        //uncomment below and update the code to test patchBatchV2alpha1NamespacedScheduledJobStatus
        //instance.patchBatchV2alpha1NamespacedScheduledJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readBatchV2alpha1NamespacedCronJob', function() {
      it('should call readBatchV2alpha1NamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test readBatchV2alpha1NamespacedCronJob
        //instance.readBatchV2alpha1NamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readBatchV2alpha1NamespacedCronJobStatus', function() {
      it('should call readBatchV2alpha1NamespacedCronJobStatus successfully', function(done) {
        //uncomment below and update the code to test readBatchV2alpha1NamespacedCronJobStatus
        //instance.readBatchV2alpha1NamespacedCronJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readBatchV2alpha1NamespacedScheduledJob', function() {
      it('should call readBatchV2alpha1NamespacedScheduledJob successfully', function(done) {
        //uncomment below and update the code to test readBatchV2alpha1NamespacedScheduledJob
        //instance.readBatchV2alpha1NamespacedScheduledJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readBatchV2alpha1NamespacedScheduledJobStatus', function() {
      it('should call readBatchV2alpha1NamespacedScheduledJobStatus successfully', function(done) {
        //uncomment below and update the code to test readBatchV2alpha1NamespacedScheduledJobStatus
        //instance.readBatchV2alpha1NamespacedScheduledJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceBatchV2alpha1NamespacedCronJob', function() {
      it('should call replaceBatchV2alpha1NamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test replaceBatchV2alpha1NamespacedCronJob
        //instance.replaceBatchV2alpha1NamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceBatchV2alpha1NamespacedCronJobStatus', function() {
      it('should call replaceBatchV2alpha1NamespacedCronJobStatus successfully', function(done) {
        //uncomment below and update the code to test replaceBatchV2alpha1NamespacedCronJobStatus
        //instance.replaceBatchV2alpha1NamespacedCronJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceBatchV2alpha1NamespacedScheduledJob', function() {
      it('should call replaceBatchV2alpha1NamespacedScheduledJob successfully', function(done) {
        //uncomment below and update the code to test replaceBatchV2alpha1NamespacedScheduledJob
        //instance.replaceBatchV2alpha1NamespacedScheduledJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceBatchV2alpha1NamespacedScheduledJobStatus', function() {
      it('should call replaceBatchV2alpha1NamespacedScheduledJobStatus successfully', function(done) {
        //uncomment below and update the code to test replaceBatchV2alpha1NamespacedScheduledJobStatus
        //instance.replaceBatchV2alpha1NamespacedScheduledJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchBatchV2alpha1CronJobListForAllNamespaces', function() {
      it('should call watchBatchV2alpha1CronJobListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchBatchV2alpha1CronJobListForAllNamespaces
        //instance.watchBatchV2alpha1CronJobListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchBatchV2alpha1NamespacedCronJob', function() {
      it('should call watchBatchV2alpha1NamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test watchBatchV2alpha1NamespacedCronJob
        //instance.watchBatchV2alpha1NamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchBatchV2alpha1NamespacedCronJobList', function() {
      it('should call watchBatchV2alpha1NamespacedCronJobList successfully', function(done) {
        //uncomment below and update the code to test watchBatchV2alpha1NamespacedCronJobList
        //instance.watchBatchV2alpha1NamespacedCronJobList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchBatchV2alpha1NamespacedScheduledJob', function() {
      it('should call watchBatchV2alpha1NamespacedScheduledJob successfully', function(done) {
        //uncomment below and update the code to test watchBatchV2alpha1NamespacedScheduledJob
        //instance.watchBatchV2alpha1NamespacedScheduledJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchBatchV2alpha1NamespacedScheduledJobList', function() {
      it('should call watchBatchV2alpha1NamespacedScheduledJobList successfully', function(done) {
        //uncomment below and update the code to test watchBatchV2alpha1NamespacedScheduledJobList
        //instance.watchBatchV2alpha1NamespacedScheduledJobList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchBatchV2alpha1ScheduledJobListForAllNamespaces', function() {
      it('should call watchBatchV2alpha1ScheduledJobListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchBatchV2alpha1ScheduledJobListForAllNamespaces
        //instance.watchBatchV2alpha1ScheduledJobListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
