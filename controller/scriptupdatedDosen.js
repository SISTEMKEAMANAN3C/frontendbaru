// value params
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const namadosen = searchParams.get("namadosen");
const pendidikandosen = searchParams.get("pendidikandosen");
const kurikulumdosen = searchParams.get("kurikulumdosen");
const penelitiandosen = searchParams.get("penelitiandosen");
const gelardosen = searchParams.get("gelardosen");
const lembagadosen = searchParams.get("lembagadosen");
const kemampuandosen = searchParams.get("kemampuandosen");
const penghargaandosen = searchParams.get("penghargaandosen");
const judulsertifikat = searchParams.get("judulsertifikat");
const pemberisertifikat = searchParams.get("pemberisertifikat");
const penerimasertifikat = searchParams.get("penerimasertifikat");
const tujuansertifikat = searchParams.get("tujuansertifikat");
const tanggalpenerbitansertifikat = searchParams.get("tanggalpenerbitansertifikat");
const capsertifikat = searchParams.get("capsertifikat");
const nomorsertifikat = searchParams.get("nomorsertifikat");
const infosertifikat = searchParams.get("infosertifikat");
const logosertifikat = searchParams.get("logosertifikat");
const penawarankerja = searchParams.get("penawarankerja");
const perjanjiankerja = searchParams.get("perjanjiankerja");
const pemberhentiankerja = searchParams.get("pemberhentiankerja");
const keterangankerja = searchParams.get("keterangankerja");
const kuasakerja = searchParams.get("kuasakerja");
const status = searchParams.get("status");

// change value form
document.getElementById("id").value = id;
document.getElementById("namadosen").value = namadosen;
document.getElementById("pendidikandosen").value = pendidikandosen;
document.getElementById("kurikulumdosen").value = kurikulumdosen;
document.getElementById("penelitiandosen").value = penelitiandosen;
document.getElementById("gelardosen").value = gelardosen;
document.getElementById("lembagadosen").value = lembagadosen;
document.getElementById("kemampuandosen").value = kemampuandosen;
document.getElementById("penghargaandosen").value = penghargaandosen;
document.getElementById("judulsertifikat").value = judulsertifikat;
document.getElementById("pemberisertifikat").value = pemberisertifikat;
document.getElementById("penerimasertifikat").value = penerimasertifikat;
document.getElementById("tujuansertifikat").value = tujuansertifikat;
document.getElementById("tanggalpenerbitansertifikat").value = tanggalpenerbitansertifikat;
document.getElementById("capsertifikat").value = capsertifikat;
document.getElementById("nomorsertifikat").value = nomorsertifikat;
document.getElementById("infosertifikat").value = infosertifikat;
document.getElementById("logosertifikat").value = logosertifikat;
document.getElementById("penawarankerja").value = penawarankerja;
document.getElementById("perjanjiankerja").value = perjanjiankerja;
document.getElementById("pemberhentiankerja").value = pemberhentiankerja;
document.getElementById("keterangankerja").value = keterangankerja;
document.getElementById("kuasakerja").value = kuasakerja;
document.getElementById("status").checked = status === 'true';