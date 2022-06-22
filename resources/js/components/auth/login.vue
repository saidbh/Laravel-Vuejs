<template>
<div class="container" style="margin-top: 10%">
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                <div class="card-body">
                    <form action="" method="post" enctype="multipart/form-data">
                        <div class="row mt-3">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="email" name="email" value="" class="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="password" name="password" class="form-control mb-0" id="exampleInputPassword1" placeholder="Password">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-12">
                                <button type="submit" class="btn btn-primary btn-lg btn-block w-100">Log in</button>
                            </div>
                        </div>
                    </form>
                        <div class="row mt-3">
                            <div class="col-lg-12 text-center">
                                <div class="form-group">
                                    <a href="#">Forget your password ?</a>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <hr>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-12 text-center">
                                <button type="button" class="btn btn-success btn-lg btn-block w-50" data-bs-toggle="modal" data-bs-target="#signup">Create account</button>
                                <div class="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title" id="exampleModalLabel">Signup</h5>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
