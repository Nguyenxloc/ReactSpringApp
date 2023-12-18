package com.example.springboot.repositories;
import com.example.springboot.model.ChucVu;
import com.example.springboot.model.CuaHang;
import com.example.springboot.model.NhanVien;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import java.sql.Date;
import java.util.ArrayList;
public class NhanVienDAO {
    //    SessionFactory  factory = HibernateUtil.getFACTORY();
    Transaction tx = null;
    public void add(String idNV, String ma, String ten, String temDem, String ho, String gioiTinh, Date ngaySinh, String diaChi, String sdt, String matKhau, CuaHang ch, ChucVu cv, int trangThai) {
        NhanVien nv = new NhanVien(idNV, ma, ten, temDem, ho, gioiTinh, ngaySinh, diaChi, sdt, matKhau, ch, cv, trangThai);
        try {
            org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
            cfg.configure("hibernate.cfg.xml");
            SessionFactory factory = cfg.buildSessionFactory();
            Session session = factory.openSession();
            tx = session.beginTransaction();
            session.save(nv);
            tx.commit();
            System.out.println("add success");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public ArrayList<NhanVien> getAll() {
        ArrayList<NhanVien> lstNhanViens = new ArrayList<>();
        try {
            org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
            cfg.configure("hibernate.cfg.xml");
            SessionFactory factory =cfg.buildSessionFactory();
            Session session = factory.openSession();
            tx = session.beginTransaction();
            lstNhanViens = (ArrayList<NhanVien>) session.createQuery("from NhanVien").list();
            System.out.println(lstNhanViens.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lstNhanViens;
    }

    public NhanVien getByID(String id) {
        NhanVien nv = new NhanVien();
        try {
            org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
            cfg.configure("hibernate.cfg.xml");
            SessionFactory factory =cfg.buildSessionFactory();
            Session session = factory.openSession();
            tx = session.beginTransaction();
            nv = session.get(NhanVien.class, id);
            System.out.println(nv.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return nv;
    }

    public void deleteNhanVienByID(NhanVien nv) {
        try {
            org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
            cfg.configure("hibernate.cfg.xml");
            SessionFactory factory =cfg.buildSessionFactory();
            Session session = factory.openSession();
            tx = session.beginTransaction();
            session.delete(nv);
            tx.commit();
            System.out.println("delete success !");
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void save(NhanVien nhanVien) {
        try {
            org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
            cfg.configure("hibernate.cfg.xml");
            SessionFactory factory =cfg.buildSessionFactory();
            Session session = factory.openSession();
            tx = session.beginTransaction();
            session.save(nhanVien);
            tx.commit();
            System.out.println("save success !");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void update(NhanVien nhanVien) {
        try {
            org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
            cfg.configure("hibernate.cfg.xml");
            SessionFactory factory =cfg.buildSessionFactory();
            Session session = factory.openSession();
            tx = session.beginTransaction();
            session.saveOrUpdate(nhanVien);
            tx.commit();
            System.out.println("update success !");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
