package com.example.springboot.testHibernate;

import com.example.springboot.model.KhachHang;
import com.example.springboot.model.NhanVien;
import com.example.springboot.repositories.HoaDonDAO;
import com.example.springboot.repositories.KhachHangDAO;
import com.example.springboot.repositories.NhanVienDAO;

public class AddHoaDonTest {
    public static void main(String[] args) {
        HoaDonDAO hoaDonDAO = new HoaDonDAO();
        KhachHangDAO khachHangDAO = new KhachHangDAO();
        NhanVienDAO nhanVienDAO = new NhanVienDAO();
//        String idHoaDon, KhachHang KH, NhanVien nv, String ma, Date ngayTao, Date ngayThanhToan, Date ngayShip, Date ngayNhan, int tinhTrang, String tenNguoiNhan, String diaChi, String sdt
        KhachHang kh = khachHangDAO.getById("9680EED1-8C17-4E07-A77E-78AC2646AD24");
        NhanVien nv = nhanVienDAO.getByID("6BEA5DC1-5452-4DF3-8D68-AC2A110D494D");
//        int count  = hoaDonDAO.getAll().size();
//        hoaDonDAO.add(null,kh,nv,count+1,new Date(2023,05,06),new Date(2023,05,07),new Date(2023,05,07),new Date(2023,05,10),1,"LocNguyen","QuangNinh","0989656565");
        System.out.println(hoaDonDAO.getHoaDonAvai(kh));
    }
}
