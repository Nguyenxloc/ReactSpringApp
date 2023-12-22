package com.example.springboot.controller;

import com.example.springboot.model.*;
import com.example.springboot.service.SanPhamService;
import com.example.springboot.viewModel.ChiTietSPView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/chiTietSP")
public class ChiTietSPController {
    private SanPhamService sanPhamService = new SanPhamService();

    //chiTietSP
    @CrossOrigin
    @GetMapping("/getAll")
    public ResponseEntity<ArrayList<ChiTietSP>> getAllChiTietSP() {
        ArrayList<ChiTietSP> lstChiTietSPs = new ArrayList<>();
        lstChiTietSPs = sanPhamService.getAllChiTietSP();
        return ResponseEntity.ok(lstChiTietSPs);
    }

    @GetMapping("/{id}")
    public ChiTietSP getChiTietSPByID(@PathVariable(value = "id") String id) {
        return sanPhamService.getByIDChiTietSP(id);
    }

    @PostMapping("/add")
    public ResponseEntity createChiTietSP(@RequestBody ChiTietSPView chiTietSPView) {
        System.out.println("tessttingggggggggggggggggggggggggggg:"+chiTietSPView.toString());
        SanPham sp = sanPhamService.getByIDSP(chiTietSPView.getSp());
        NSX nsx = sanPhamService.getByIDNSX(chiTietSPView.getNsx());
        MauSac mauSac = sanPhamService.getByIdMauSac(chiTietSPView.getMauSac());
        DongSP dongSP = sanPhamService.getByIDDongSP(chiTietSPView.getDongSP());
        sanPhamService.addChiTietSP(null,sp,nsx,mauSac,dongSP, chiTietSPView.getNamBH(), chiTietSPView.getMota(), chiTietSPView.getSoLuongTon(), chiTietSPView.getGiaNhap(), chiTietSPView.getGiaBan(), chiTietSPView.getLink());
        return ResponseEntity.ok(chiTietSPView);
    }
    @PutMapping("/{id}")
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

    @DeleteMapping("/{id}")
    public void deleteChiTietSP(@RequestBody ChiTietSP chiTietSP) {
        sanPhamService.deleteChiTietSP(chiTietSP);
    }

  }