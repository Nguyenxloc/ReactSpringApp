package com.example.springboot.controller;
import com.example.springboot.model.NhanVien;
import com.example.springboot.service.NhanVienService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private NhanVienService nhanVienService = new NhanVienService();
    @CrossOrigin
    @GetMapping("/getAll")
    public ResponseEntity<ArrayList<NhanVien>> getAllNhanVien() {
        ArrayList<NhanVien> lstNhanViens = new ArrayList<>();
        lstNhanViens = nhanVienService.getAllNhanVien();
        return ResponseEntity.ok(lstNhanViens);
    }
    @GetMapping("/{id}")
    public NhanVien getNhanVienByID(@PathVariable(value="id") String id) {
        return nhanVienService.getByIDNhanVien(id);
    }
    @PostMapping("/add")
    public ResponseEntity createNhanVien(@RequestBody NhanVien nhanVien) {
        System.out.println(nhanVien);
        nhanVienService.saveNhanVien(nhanVien);
        return ResponseEntity.ok(nhanVien);
    }
    @PutMapping("/{id}")
    public ResponseEntity updateNhanVien(@RequestBody NhanVien nhanVien) {
        nhanVienService.updateNhanVien(nhanVien);
        return ResponseEntity.ok(nhanVien);
    }
    @DeleteMapping("/{id}")
    public void deleteNhanVien(@RequestBody NhanVien nhanVien) {
        nhanVienService.deleteNhanvienByID(nhanVien);
    }
}