package com.example.springboot.controller;
import com.example.springboot.model.ChiTietSP;
import com.example.springboot.model.NSX;
import com.example.springboot.model.SanPham;
import com.example.springboot.service.SanPhamService;
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
    public SanPham getSanPhamByID(@PathVariable(value="id") String id) {
        return sanPhamService.getByIDSP(id);
    }
    @PostMapping("/add")
    public ResponseEntity createSanPham(@RequestBody SanPham sanPham) {
        System.out.println(sanPham);
        sanPhamService.addSP(null,sanPham.getMa(),sanPham.getTen(),sanPham.getLink());
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
    public ChiTietSP getChiTietSPByID(@PathVariable(value="id") String id) {
        return sanPhamService.getByIDChiTietSP(id);
    }
    @PostMapping("/chiTietSP/add")
    public ResponseEntity createChiTietSP(@RequestBody ChiTietSP chiTietSP) {
        sanPhamService.addChiTietSP(chiTietSP.getIdChiTietSP(),chiTietSP.getSp(),chiTietSP.getNsx(),chiTietSP.getMauSac(),chiTietSP.getDongSP(),chiTietSP.getNamBH(),chiTietSP.getMota(),chiTietSP.getSoLuongTon(),chiTietSP.getGiaNhap(),chiTietSP.getGiaBan(),chiTietSP.getLink());
        return ResponseEntity.ok(chiTietSP);
    }
    @PutMapping("/chiTietSP/{id}")
    public ResponseEntity updateChiTietSP(@RequestBody ChiTietSP chiTietSP) {
        sanPhamService.updateChiTietSP(chiTietSP);
        return ResponseEntity.ok(chiTietSP);
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
    public NSX getNsxByID(@PathVariable(value="id") String id) {
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

}