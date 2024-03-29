import { getCookie } from "./cookies.js";
import { getHeader } from "./api.js";
import { AmbilSatuFormDosenAPI } from "./gudangAPI.js";


export default function getDetailForm() {
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    getHeader(AmbilSatuFormDosenAPI, tokenkey, tokenvalue, responseData);
}

// Display products in the tabl3
function responseData(products) {
    const postContainer = document.getElementById('ini-detail-dosen');
    // Create a new div for each post
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    // Set the HTML content for the post
    postDiv.innerHTML = `
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            <form role="form" action="javascript:void(0);">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label>NIK</label>
                                        <input id="detail-nik" class="form-control" value="${products.nik}" disabled>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.row (nested) -->
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Akademisi
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Nama Dosen</th>
                                        <th>Pendidikan Dosen</th>
                                        <th>Gelar Dosen</th>
                                        <th>Kemampuan Dosen</th>
                                        <th>Penghargaan Dosen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${products.akademis.nama_dosen}</td>
                                        <td>${products.akademis.pendidikan_dosen}</td>
                                        <td>${products.akademis.gelar_dosen}</td>
                                        <td>${products.akademis.kemampuan_dosen}</td>
                                        <td>${products.akademis.penghargaan_dosen}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.table-responsive -->
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Sertifikat
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Judul Sertifikat</th>
                                        <th>Pemberi Sertifikat</th>
                                        <th>Penerima Sertifikat</th>
                                        <th>Tanggal Penerbitan Sertifikat</th>
                                        <th>Nomor Sertifikat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${products.sertifikat.map(cert => cert.judul_sertifikat).join(', ')}</td>
                                        <td>${products.sertifikat.map(cert => cert.pemberi_sertifikat).join(', ')}</td>
                                        <td>${products.sertifikat.map(cert => cert.penerima_sertifikat).join(', ')}</td>
                                        <td>${products.sertifikat.map(cert => cert.tanggal_penerbitan_sertifikat).join(', ')}</td>
                                        <td>${products.sertifikat.map(cert => cert.nomor_sertifikat).join(', ')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.table-responsive -->
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Surat Kerja
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Penawaran Kerja</th>
                                        <th>Perjanjian Kerja</th>
                                        <th>Pemberhentian Kerja</th>
                                        <th>Keterangan Kerja</th>
                                        <th>Kuasa Kerja</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${products.suratkerja.map(job => job.penawaran_kerja).join(', ')}</td>
                                        <td>${products.suratkerja.map(job => job.perjanjian_kerja).join(', ')}</td>
                                        <td>${products.suratkerja.map(job => job.pemberhentian_kerja).join(', ')}</td>
                                        <td>${products.suratkerja.map(job => job.keterangan_kerja).join(', ')}</td>
                                        <td>${products.suratkerja.map(job => job.kuasa_kerja).join(', ')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.table-responsive -->
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
        </div>
        <td><a class="btn btn-outline btn-success" href="updatedosen.html?nama_dosen=${products.akademis.nama_dosen}&pendidikan_dosen=${products.akademis.pendidikan_dosen}&gelar_dosen=${products.akademis.gelar_dosen}&kemampuan_dosen=${products.akademis.kemampuan_dosen}&penghargaan_dosen=${products.akademis.penghargaan_dosen}&judul_sertifikat=${products.sertifikat.map(cert => cert.judul_sertifikat).join(', ')}&pemberi_sertifikat=${products.sertifikat.map(cert => cert.pemberi_sertifikat).join(', ')}&penerima_sertifikat=${products.sertifikat.map(cert => cert.penerima_sertifikat).join(', ')}&tanggal_penerbitan_sertifikat=${products.sertifikat.map(cert => cert.tanggal_penerbitan_sertifikat).join(', ')}&nomor_sertifikat=${products.sertifikat.map(cert => cert.nomor_sertifikat).join(', ')}&penawaran_kerja=${products.suratkerja.map(cert => cert.penawaran_kerja).join(', ')}&perjanjian_kerja=${products.suratkerja.map(cert => cert.perjanjian_kerja).join(', ')}&pemberhentian_kerja=${products.suratkerja.map(cert => cert.pemberhentian_kerja).join(', ')}&keterangan_kerja=${products.suratkerja.map(cert => cert.keterangan_kerja).join(', ')}&kuasa_kerja=${products.suratkerja.map(cert => cert.kuasa_kerja).join(', ')}">Edit</a></td>
        <td><a class="btn btn-outline btn-danger" onclick="HapusFormDosen()"">Delete</a></td>
    `
    postContainer.appendChild(postDiv);
}
