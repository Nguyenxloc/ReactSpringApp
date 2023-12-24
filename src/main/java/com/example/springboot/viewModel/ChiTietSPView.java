package com.example.springboot.viewModel;

public class ChiTietSPView {
    private String idChiTietSP;
    private String sp;
    private String nsx;
    private String mauSac;
    private String dongSP;
    private int namBH;
    private String mota;
    private int soLuongTon;
    private double giaNhap;
    private double giaBan;
    private String link1;
    private String link2;
    private String link3;

    public ChiTietSPView() {
    }

    public ChiTietSPView(String idChiTietSP, String sp, String nsx, String mauSac, String dongSP, int namBH, String mota, int soLuongTon, double giaNhap, double giaBan, String link1, String link2, String link3) {
        this.idChiTietSP = idChiTietSP;
        this.sp = sp;
        this.nsx = nsx;
        this.mauSac = mauSac;
        this.dongSP = dongSP;
        this.namBH = namBH;
        this.mota = mota;
        this.soLuongTon = soLuongTon;
        this.giaNhap = giaNhap;
        this.giaBan = giaBan;
        this.link1 = link1;
        this.link2 = link2;
        this.link3 = link3;
    }

    public String getIdChiTietSP() {
        return idChiTietSP;
    }

    public void setIdChiTietSP(String idChiTietSP) {
        this.idChiTietSP = idChiTietSP;
    }

    public String getSp() {
        return sp;
    }

    public void setSp(String sp) {
        this.sp = sp;
    }

    public String getNsx() {
        return nsx;
    }

    public void setNsx(String nsx) {
        this.nsx = nsx;
    }

    public String getMauSac() {
        return mauSac;
    }

    public void setMauSac(String mauSac) {
        this.mauSac = mauSac;
    }

    public String getDongSP() {
        return dongSP;
    }

    public void setDongSP(String dongSP) {
        this.dongSP = dongSP;
    }

    public int getNamBH() {
        return namBH;
    }

    public void setNamBH(int namBH) {
        this.namBH = namBH;
    }

    public String getMota() {
        return mota;
    }

    public void setMota(String mota) {
        this.mota = mota;
    }

    public int getSoLuongTon() {
        return soLuongTon;
    }

    public void setSoLuongTon(int soLuongTon) {
        this.soLuongTon = soLuongTon;
    }

    public double getGiaNhap() {
        return giaNhap;
    }

    public void setGiaNhap(double giaNhap) {
        this.giaNhap = giaNhap;
    }

    public double getGiaBan() {
        return giaBan;
    }

    public void setGiaBan(double giaBan) {
        this.giaBan = giaBan;
    }

    public String getLink1() {
        return link1;
    }

    public void setLink1(String link1) {
        this.link1 = link1;
    }

    public String getLink2() {
        return link2;
    }

    public void setLink2(String link2) {
        this.link2 = link2;
    }

    public String getLink3() {
        return link3;
    }

    public void setLink3(String link3) {
        this.link3 = link3;
    }

    @Override
    public String toString() {
        return "ChiTietSPView{" +
                "idChiTietSP='" + idChiTietSP + '\'' +
                ", sp='" + sp + '\'' +
                ", nsx='" + nsx + '\'' +
                ", mauSac='" + mauSac + '\'' +
                ", dongSP='" + dongSP + '\'' +
                ", namBH=" + namBH +
                ", mota='" + mota + '\'' +
                ", soLuongTon=" + soLuongTon +
                ", giaNhap=" + giaNhap +
                ", giaBan=" + giaBan +
                ", link1='" + link1 + '\'' +
                ", link2='" + link2 + '\'' +
                ", link3='" + link3 + '\'' +
                '}';
    }
}