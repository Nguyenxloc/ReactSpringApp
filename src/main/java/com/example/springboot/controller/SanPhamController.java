package com.example.springboot.controller;

import com.example.springboot.model.*;
import com.example.springboot.service.SanPhamService;
import com.example.springboot.viewModel.ChiTietSPView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/sanPham")
public class SanPhamController {
    private SanPhamService sanPhamService = new SanPhamService();

    @CrossOrigin
    @GetMapping("/getAll")
    public ResponseEntity<ArrayList<SanPham>> getAllSanPham() {
        ArrayList<SanPham> lstSanPhams = new ArrayList<>();
        lstSanPhams = sanPhamService.getAllSP();
        return ResponseEntity.ok(lstSanPhams);
    }

    @GetMapping("/{id}")
    public SanPham getSanPhamByID(@PathVariable(value = "id") String id) {
        return sanPhamService.getByIDSP(id);
    }

    @PostMapping("/add")
    public ResponseEntity createSanPham(@RequestBody SanPham sanPham) {
        System.out.println(sanPham);
        sanPhamService.addSP(null, sanPham.getMa(), sanPham.getTen(), sanPham.getLink());
        return ResponseEntity.ok(sanPham);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateSanPham(@RequestBody SanPham sanPham) {
        sanPhamService.updateSP(sanPham);
        return ResponseEntity.ok(sanPham);
    }

    @DeleteMapping("/{id}")
    public void deleteSanPham(@RequestBody SanPham sanPham) {
        sanPhamService.deleteSP(sanPham);
    }

    //chiTietSP
    @CrossOrigin
    @GetMapping("/chiTietSP/getAll")
    public ResponseEntity<ArrayList<ChiTietSP>> getAllChiTietSP() {
        ArrayList<ChiTietSP> lstChiTietSPs = new ArrayList<>();
        lstChiTietSPs = sanPhamService.getAllChiTietSP();
        return ResponseEntity.ok(lstChiTietSPs);
    }

    @GetMapping("/chiTietSP/{id}")
    public ChiTietSP getChiTietSPByID(@PathVariable(value = "id") String id) {
        return sanPhamService.getByIDChiTietSP(id);
    }

    @GetMapping("/chiTietSPView/{id}")
    public ChiTietSPView getChiTietSPByIDView(@PathVariable(value = "id") String id) {
        ChiTietSP chiTietSP = sanPhamService.getByIDChiTietSP(id);
        ChiTietSPView chiTietSPView = new ChiTietSPView(chiTietSP.getIdChiTietSP(),chiTietSP.getSp().getIdSanPham(),chiTietSP.getNsx().getIdNSX(),chiTietSP.getMauSac().getIdMauSac(),chiTietSP.getDongSP().getIdDongSP(),chiTietSP.getNamBH(),chiTietSP.getMota(),chiTietSP.getSoLuongTon(),chiTietSP.getGiaNhap(),chiTietSP.getGiaBan(),chiTietSP.getLink());
        return chiTietSPView;
    }

    @PostMapping("/chiTietSP/add")
    public ResponseEntity createChiTietSP(@RequestBody ChiTietSPView chiTietSPView) {
        System.out.println("tessttingggggggggggggggggggggggggggg:"+chiTietSPView.toString());
        SanPham sp = sanPhamService.getByIDSP(chiTietSPView.getSp());
        NSX nsx = sanPhamService.getByIDNSX(chiTietSPView.getNsx());
        MauSac mauSac = sanPhamService.getByIdMauSac(chiTietSPView.getMauSac());
        DongSP dongSP = sanPhamService.getByIDDongSP(chiTietSPView.getDongSP());
        sanPhamService.addChiTietSP(null,sp,nsx,mauSac,dongSP, chiTietSPView.getNamBH(), chiTietSPView.getMota(), chiTietSPView.getSoLuongTon(), chiTietSPView.getGiaNhap(), chiTietSPView.getGiaBan(), chiTietSPView.getLink());
        return ResponseEntity.ok(chiTietSPView);
    }
    @PutMapping("/chiTietSP/{id}")
    public ResponseEntity updateChiTietSP(@RequestBody ChiTietSPView chiTietSPView) {
        System.out.println("-------------------------------------------------------------------------------------------------------");
        SanPham sp = sanPhamService.getByIDSP(chiTietSPView.getSp());
        NSX nsx = sanPhamService.getByIDNSX(chiTietSPView.getNsx());
        MauSac mauSac = sanPhamService.getByIdMauSac(chiTietSPView.getMauSac());
        DongSP dongSP = sanPhamService.getByIDDongSP(chiTietSPView.getDongSP());
        ChiTietSP chiTietSP = new ChiTietSP(chiTietSPView.getIdChiTietSP(),sp,nsx,mauSac,dongSP, chiTietSPView.getNamBH(), chiTietSPView.getMota(), chiTietSPView.getSoLuongTon(), chiTietSPView.getGiaNhap(), chiTietSPView.getGiaBan(), chiTietSPView.getLink());
        sanPhamService.updateChiTietSP(chiTietSP);
        return ResponseEntity.ok(chiTietSPView);
    }

    @DeleteMapping("/chiTietSP/{id}")
    public void deleteChiTietSP(@RequestBody ChiTietSP chiTietSP) {
        sanPhamService.deleteChiTietSP(chiTietSP);
    }

    //nsx
    @CrossOrigin
    @GetMapping("/nsx/getAll")
    public ResponseEntity<ArrayList<NSX>> getAllNsx() {
        ArrayList<NSX> lstNSXs = new ArrayList<>();
        lstNSXs = sanPhamService.getAllNSX();
        return ResponseEntity.ok(lstNSXs);
    }

    @GetMapping("/nsx/{id}")
    public NSX getNsxByID(@PathVariable(value = "id") String id) {
        return sanPhamService.getByIDNSX(id);
    }

    @PostMapping("/nsx/add")
    public ResponseEntity createNsx(@RequestBody NSX nsx) {
        sanPhamService.addNsx(nsx.getIdNSX(), nsx.getMa(), nsx.getTen());
        return ResponseEntity.ok(nsx);
    }

    @PutMapping("/nsx/{id}")
    public ResponseEntity updateNsx(@RequestBody NSX nsx) {
        sanPhamService.updateNsx(nsx.getIdNSX(), nsx.getMa(), nsx.getTen());
        return ResponseEntity.ok(nsx);
    }

    @DeleteMapping("/nsx/{id}")
    public void deleteNsx(@RequestBody NSX nsx) {
        sanPhamService.deleteNsx(nsx);
    }

    //mausac
    @CrossOrigin
    @GetMapping("/mauSac/getAll")
    public ResponseEntity<ArrayList<MauSac>> getAllMauSac() {
        ArrayList<MauSac> lstMauSacs = new ArrayList<>();
        lstMauSacs = sanPhamService.getAllMauSac();
        return ResponseEntity.ok(lstMauSacs);
    }

    @GetMapping("/mauSac/{id}")
    public MauSac getMauSacByID(@PathVariable(value = "id") String id) {
        return sanPhamService.getByIdMauSac(id);
    }

    @PostMapping("/mauSac/add")
    public ResponseEntity createMauSac(@RequestBody MauSac mauSac) {
        sanPhamService.addMauSac(mauSac.getIdMauSac(), mauSac.getMa(), mauSac.getTen());
        return ResponseEntity.ok(mauSac);
    }

    @PutMapping("/mauSac/{id}")
    public ResponseEntity updateMauSac(@RequestBody MauSac mauSac) {
        sanPhamService.updateMauSac(mauSac.getIdMauSac(), mauSac.getMa(), mauSac.getTen());
        return ResponseEntity.ok(mauSac);
    }

    @DeleteMapping("/mauSac/{id}")
    public void deleteMauSac(@RequestBody MauSac mauSac) {
        sanPhamService.deleteMauSac(mauSac);
    }

    //dong san pham
    @CrossOrigin
    @GetMapping("/dongSP/getAll")
    public ResponseEntity<ArrayList<DongSP>> getAllDongSP() {
        ArrayList<DongSP> lstDongSPs = new ArrayList<>();
        lstDongSPs = sanPhamService.getAllDongSP();
        return ResponseEntity.ok(lstDongSPs);
    }

    @GetMapping("/dongSP/{id}")
    public DongSP getDongSPByID(@PathVariable(value = "id") String id) {
        return sanPhamService.getByIDDongSP(id);
    }

    @PostMapping("/dongSP/add")
    public ResponseEntity createDongSP(@RequestBody DongSP dongSP) {
        sanPhamService.addDongSP(dongSP.getIdDongSP(), dongSP.getMa(), dongSP.getTen());
        return ResponseEntity.ok(dongSP);
    }

    @PutMapping("/dongSP/{id}")
    public ResponseEntity updateDongSP(@RequestBody DongSP dongSP) {
        sanPhamService.updateDongSP(dongSP.getIdDongSP(), dongSP.getMa(), dongSP.getTen());
        return ResponseEntity.ok(dongSP);
    }

    @DeleteMapping("/dongSP/{id}")
    public void deleteDongSP(@RequestBody DongSP dongSP) {
        sanPhamService.deleteDongSP(dongSP);
    }

}