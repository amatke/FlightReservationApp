package org.plu.dao;

import org.plu.entities.Kupovina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KupovinaRepository extends JpaRepository<Kupovina, Long>{
}
