using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollisionDetection : MonoBehaviour
{
    public GameObject earth;
    public GameObject mars;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    public void OnCollisionEnter(Collision collision)
    {
        earth.SetActive(false);
        mars.SetActive(false);

    }

    public void OnTriggerEnter(Collider other)
    {
        Debug.Log("collided");
    }
}
