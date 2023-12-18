package com.example.springboot.repositories;
import com.example.springboot.model.NSX;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import java.util.ArrayList;
public class NSXDAO {
    //    SessionFactory factory = HibernateUtil.getFACTORY();
    Transaction tx = null;
    public void add(String id, String ma, String ten) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory = cfg.buildSessionFactory();
        Session session = factory.openSession();
        tx = session.beginTransaction();
        NSX nsx = new NSX(id, ma, ten);
        try {
            session.save(nsx);
            tx.commit();
            System.out.println("add success");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public ArrayList<NSX> getLst() {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory = cfg.buildSessionFactory();
        ArrayList<NSX> lstNsx = new ArrayList<>();
        Session session = factory.openSession();
        tx = session.beginTransaction();
        try {
            lstNsx = (ArrayList<NSX>) session.createQuery("from NSX").list();
            System.out.println(lstNsx);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lstNsx;
    }

    public NSX getById(String id) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory = cfg.buildSessionFactory();
        Session session = factory.openSession();
        tx = session.beginTransaction();
        NSX nsx = new NSX();
        try {
            nsx = session.get(NSX.class, id);
            System.out.println(nsx);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return nsx;
    }

    public void delete(NSX nsx) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory = cfg.buildSessionFactory();
        Session session = factory.openSession();
        tx = session.beginTransaction();
        try {
            session.delete(nsx);
            tx.commit();
            System.out.println("delete success");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void update(String id, String ma, String ten) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory = cfg.buildSessionFactory();
        Session session = factory.openSession();
        tx = session.beginTransaction();
        NSX nsx = new NSX(id,ma,ten);
        try {
            session.saveOrUpdate(nsx);
            tx.commit();
            System.out.println("update success");
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}
