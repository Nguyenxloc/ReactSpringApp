package com.example.springboot.service;
import com.example.springboot.model.ChucVu;
import com.example.springboot.model.CuaHang;
import com.example.springboot.model.NhanVien;
import com.example.springboot.repositories.ChucVuDAO;
import com.example.springboot.repositories.CuaHangDAO;
import com.example.springboot.repositories.NhanVienDAO;
import java.sql.Date;
import java.util.ArrayList;
public class NhanVienService {
    NhanVienDAO nhanVienDAO = new NhanVienDAO();
    ChucVuDAO chucVuDAO = new ChucVuDAO();
    CuaHangDAO cuaHangDAO = new CuaHangDAO();
    //// Nhan Vien
    public ArrayList<NhanVien> getAllNhanVien() {
        return nhanVienDAO.getAll();
    }
    public void addNhanVien(String idNV, String ma, String ten, String temDem, String ho, String gioiTinh, Date ngaySinh, String diaChi, String sdt, String matKhau, CuaHang ch, ChucVu cv, int trangThai) {
        nhanVienDAO.add(idNV, ma, ten, temDem, ho, gioiTinh, ngaySinh, diaChi, sdt, matKhau, ch, cv, trangThai);
    }
    public NhanVien getByIDNhanVien(String id) {
        return nhanVienDAO.getByID(id);
    }

    public void deleteNhanvienByID(NhanVien nv) {
        nhanVienDAO.deleteNhanVienByID(nv);
    }

    //////Chuc vu
    public ArrayList<ChucVu> getAllChucVu() {
        return chucVuDAO.getLstChucVu();
    }

    public void addChucVu(String id, String ma, String ten) {
        chucVuDAO.addChucVu(id, ma, ten);
    }

    public ChucVu getByID(String id) {
        return chucVuDAO.getByID(id);
    }

    public void deleteChucVu(ChucVu chucVu) {
        chucVuDAO.deleteChucVu(chucVu);
    }

    ////Cua hang
    public ArrayList<CuaHang> getAllCuaHang() {
        return cuaHangDAO.getLstCuaHang();
    }

    public void addCuaHang(String id, String ma, String ten, String diaChi, String thanhPho, String quocGia) {
        cuaHangDAO.addCuaHang(id, ma, ten, diaChi, thanhPho, quocGia);
    }

    public CuaHang getByIDCuaHang(String id) {
        return cuaHangDAO.getByID(id);
    }

    public void deleteCuaHang(CuaHang cuaHang) {
        cuaHangDAO.delete(cuaHang);
    }

    public void saveNhanVien(NhanVien nhanVien) {
         nhanVienDAO.save(nhanVien);
    }

    public void updateNhanVien(NhanVien nhanVien) {
         nhanVienDAO.update(nhanVien);
    }

    public void updateChucVu(ChucVu chucVu) {
         nhanVienDAO.updateChucVu(chucVu);
    }

    public void deleteChucVuByID(ChucVu chucVu) {
         chucVuDAO.deleteChucVu(chucVu);
    }

    public void updateCuaHang(CuaHang cuaHang) {
         cuaHangDAO.updateCuaHang(cuaHang);
    }
}
