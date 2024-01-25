import { getCookie } from "./cookies.js";
import { postHeader } from "./api.js";
import { getValue } from "./element.js";
import { AmbilSatuFormAdminAPI } from "./gudangAPI.js";


export default function AmbilSatuFormAdmin() {
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let datainjson = {
        "nik": getValue("nik_detail_admin")
    };

    postHeader(AmbilSatuFormAdminAPI, datainjson, tokenkey, tokenvalue, responseData);
}

// Display products in the tabl3
function responseData(products) {
    const postContainer = document.getElementById('ini-detail-dosen-admin');
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
    `
    postContainer.appendChild(postDiv);
}
