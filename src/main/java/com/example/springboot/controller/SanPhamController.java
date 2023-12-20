package com.example.springboot.controller;
import com.example.springboot.model.ChucVu;
import com.example.springboot.model.SanPham;
import com.example.springboot.service.NhanVienService;
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
}